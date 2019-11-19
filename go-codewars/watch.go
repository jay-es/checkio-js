package main

import (
	"fmt"
	"os"
	"os/exec"
	"time"

	"./ansi"
	"github.com/fsnotify/fsnotify"
	"github.com/shiena/ansicolor"
)

var watchTarget = "./kata"
var testTarget = "./kata_test"
var testArgs = []string{
	"test",
	testTarget,
	"-count=1", // no-cache
	"-v",
}

func run() {
	fmt.Printf("%v\n", time.Now())
	out, err := exec.Command("go", testArgs...).CombinedOutput()

	if err != nil {
		errStr := fmt.Sprintf("%s%s%s\n", ansi.LightRed, err, ansi.Reset)
		out = append([]byte(errStr), out...)
	}

	w := ansicolor.NewAnsiColorWriter(os.Stdout) // for Windows
	fmt.Fprintf(w, "%s\n", out)
}

func watch() {
	watcher, err := fsnotify.NewWatcher()

	if err != nil {
		fmt.Println("ERROR", err)
	}

	if err = watcher.Add(watchTarget); err != nil {
		fmt.Println("ERROR", err)
	}
	if err = watcher.Add(testTarget); err != nil {
		fmt.Println("ERROR", err)
	}

	defer watcher.Close()

	done := make(chan bool)

	go func() {
		for {
			select {
			// watch for events
			case <-watcher.Events:
				watcher.Remove(watchTarget)
				watcher.Remove(testTarget)
				run()
				watcher.Add(watchTarget)
				watcher.Add(testTarget)

			// watch for errors
			case err := <-watcher.Errors:
				fmt.Println("ERROR", err)
			}
		}
	}()

	run()
	<-done
}

func main() {
	if len(os.Args) > 1 {
		watchTarget = os.Args[1]
	}

	if len(os.Args) > 2 {
		testTarget = os.Args[2]
	}

	watch()
}
