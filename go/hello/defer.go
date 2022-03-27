package main

import "fmt"

func test() int {
	i := 0
	defer func() {
		fmt.Println("defer1")
	}()
	defer func() {
		i += 1
		fmt.Println("defer2")
	}()
	return i
}

func main() {
	// Output:
	// defer2
	// defer1
	// return 0
	fmt.Println("return", test())
}
