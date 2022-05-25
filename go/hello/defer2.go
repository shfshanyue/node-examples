package main

import (
	"fmt"
)

func test() {
	defer func() { fmt.Println("A") }()
	defer func() { fmt.Println("B") }()
	defer func() { fmt.Println("C") }()
}

func main() {
	test()
}
