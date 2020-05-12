/*OBJECTS - CONSTRUCTS*/

const obj1 = {
    name : "hello",
    surname : "its me",
    thoughts : "none"
}

const obj2 = {
    name : "hello",
    secondname : "its me",
    thoughts : "none"
}

const obj3 = {
    name : "hello",
    surname : "mario",
    thoughts : "none"
}

/*TESTS*/

//run all tests
console.log(runAllTests());

function runAllTests(){

    return {test1 : test1_different_prop_names_check(),
            test2 : test2_different_values_check()};
};

//test1 - to check if given 2 objects (no 3rd param) the program will be able to correctly determine if both objects contain same property names (not values)
function test1_different_prop_names_check(){
    if(object_dif_checker(obj1, obj2) == "same")
        return "test 1 - different property name check - " + "FAIL";
    else
        if(object_dif_checker(obj1, obj3) == "same")
            return "test 1 - different property name check - " + "PASS";
        else
            return "test 1 - different property name check - " + "FAIL";        
}

//test2 - to check if given 2 objects (no 3rd param) the program will be able to correctly determine if both objects contain same property values
function test2_different_values_check(){
      return "empty";
}


/*PROGRAM*/

function object_dif_checker(objA, objB, check = 'props'){

    return "hi";
}

