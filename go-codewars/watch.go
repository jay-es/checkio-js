package main

import (
	"fmt"
	"os"
	"os/exec"
	"time"

	"github.com/fsnotify/fsnotify"
	"github.com/shiena/ansicolor"
)

var watchTarget = "./kata"
var exeFilepath = "./main/main.go"

func run() {
	fmt.Printf("%v\n", time.Now())
	out, err := exec.Command("go", "run", exeFilepath).CombinedOutput()

	if err != nil {
		errStr := fmt.Sprintf("\x1b[91m%s\x1b[0m\n", err)
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

	if err := watcher.Add(watchTarget); err != nil {
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
				run()
				watcher.Add(watchTarget)

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
		exeFilepath = os.Args[2]
	}

	watch()
}
