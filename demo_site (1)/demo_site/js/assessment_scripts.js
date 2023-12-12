// writting a function for purchased event in checkout page

let cl_product_viewed = setInterval(function() {
    if (((window.CLabsgbVar && {}).generalProps && {}).uid) {
        const eventName = "purchased event";
        const properties = {
            "productProperties": [{
                "productName": {
                    "type": "string",
                    "value": "product_name"
                },
                "productQuantity": {
                    "type": "number",
                    "value": "product_quantity"
                },"productPrice": {
                    "type": "number",
                    "value": "product_price"
                },
                "productTotal": {
                    "type": "number",
                    "value": "product_total"
                },
            }]
        }
        
        _cl.trackClick(eventName, properties)
        clearInterval(cl_product_viewed)
    }
}, 1000);


// writting a function to purchased event to collect user data

let cl_create_user = setInterval(function() {
    if (((window.CLabsgbVar && {}).generalProps && {}).uid) {
        const properties = {
            "customProperties": {
                "user_traits": {
                    "t": "Object",
                    "v": {
                       
                        "first_name": {
                            "t": "string",
                            "v": "arjun"
                        },
                        "last_name": {
                            "t": "string",
                            "v": "k"
                        },
                        "phone": {
                            "t": "number",
                            "v": "+91980045604"
                        },
                        "email": {
                            "t": "string",
                            "v": "arjun@clabs.co"
                        },
                        "city": {
                            "t": "string",
                            "v": "chennai"
                        },
                        "state": {
                            "t": "string",
                            "v": "TamilNadu"
                        },
                        "zip-code": {
                            "t": "number",
                            "v": "600096"
                        }
                    }
                },
                "identify_by_email": {
                    "t": "string",
                    "v": "arjun@clabs.co",
                    "ib": true
                }
            }
        }
        _cl.identify(properties)
        clearInterval(cl_create_user)
    }
}, 1000);

//3 
let cl_category_viewed = setInterval(function() {
    if (((window.CLabsgbVar && {}).generalProps && {}).uid) {
        const eventName = "Category viewed"
        const properties = {
            "customProperties": {
               
                "page_url": {
                    
                    "t": "string",
                    "v": "https://customerlabs.co"
                },
                "page_title": {
               
                    "t": "string",
                    "v": "No-code Customer Data Platform for SMBs" 

                }
            }
        }
        _cl.pageview(eventName, properties)
        clearInterval(cl_category_viewed)
    }
}, 1000);

