const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {
    if(x == 5){
    break // para o for qnd o x for igual a 5
    }
    console.log(`${x} = ${nums[x]}`)
}

for (y in nums) {
    if(y== 5) {
    continue // para a repeticao atual e vai para a proxima
    }
    console.log(`${y}= ${nums[y]}`)
}

externo: for(a in nums){
    for(b in nums) {
        if(a ==2 && b ==3) break externo
        console.log(`Par = ${a},${b}`)
    }
}  //NAO USE
