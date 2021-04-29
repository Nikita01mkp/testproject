var i = 0;

const count = () => {
    for(i = 1; i <= 10; i++){
        setTimeout(() => {console.log(i)}, 0)
    }
}

count();

