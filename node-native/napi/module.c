#include <node_api.h>
#include <string.h>

// + napi_status
// + napi_value
// + napi_create_function
// + napi_set_named_property

int increment (int a) {
    return a + 1;
}

napi_value sum(napi_env env, napi_callback_info info) {
    napi_status status;

    size_t argc = 2;
    napi_value argv[2];

    int a = 0;
    int b = 0;

    // 获取函数参数, argc 为参数的数量，argv 为参数数组
    napi_get_cb_info(env, info, &argc, argv, NULL, NULL);
    
    // napi_value -> int: 类型转化
    napi_get_value_int32(env, argv[0], &a);
    napi_get_value_int32(env, argv[1], &b);
    
    int sum = a + b;

    napi_value nSum;
    // int -> napi_value: 类型转化
    status = napi_create_int32(env, sum, &nSum);
    return nSum;
}

napi_value Init(napi_env env, napi_value exports) {
    napi_value nHello, nSum;
    char* hello = "hello, world";

    napi_create_string_utf8(env, hello, strlen(hello), &nHello);
    napi_create_function(env, NULL, 0, sum, NULL, &nSum);
    napi_set_named_property(env, exports, "hello", nHello);
    napi_set_named_property(env, exports, "sum", nSum);

    return exports;
}

NAPI_MODULE(NODE_GYP_MODULE_NAME, Init)
