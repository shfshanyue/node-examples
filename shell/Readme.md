``` bash
$ cat shell/page | xargs -I {} bash -c "echo '{}'; curl -s -I '{}' | grep -i -e ^age -e cache-control; echo"
```

``` bash
$ for i in $(cat shell/page); do echo $i; curl -Is $i | grep -i -e ^age -e cache-control -e HTTP -ve established; echo ; done
```
