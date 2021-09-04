{
    "targets": [{
        "target_name": "module",
        "sources": ["./module.c"]
    }, {
        "target_name": "action_after_build",
        "type": "none",
        "copies": [{
            "files": ["<(PRODUCT_DIR)/module.node"],
            "destination": "./"
        }]
    }]
}
