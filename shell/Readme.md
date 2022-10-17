``` bash
$ cat shell/page | xargs -I {} bash -c "echo '{}'; curl -s -I '{}' | grep -i -e ^age -e cache-control; echo"
```

``` bash
$ for 
```