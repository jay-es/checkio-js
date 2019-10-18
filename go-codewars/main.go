package main

import (
	"fmt"
	"reflect"
	"time"

	"./ansi"
	"./kata"
)

func main() {
	start := time.Now()

	for _, v := range kata.TestCases() {
		if reflect.DeepEqual(v[0], v[1]) {
			fmt.Printf("%sPASSED%s %v\n", ansi.Green, ansi.Reset, v[0])
		} else {
			fmt.Printf("%sFAILED%s %v ", ansi.LightRed, ansi.Reset, v[0])
			fmt.Printf("%sexcepted:%s %v\n", ansi.Dim, ansi.Reset, v[1])
		}
	}

	fmt.Printf("%s%v%s\n", ansi.Cyan, time.Now().Sub(start), ansi.Reset)
}
