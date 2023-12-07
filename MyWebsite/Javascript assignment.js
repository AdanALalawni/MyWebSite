var twoSum = function(nums, target) {
    let res = new Map();
    for(let i=0;i<nums.length;i++){
        const y=target-nums[i];
        if(res.has(y)){
            return[res.get(y),i]
        }
        else{
            res.set(nums[i],i)
        }
    }
    return [-1]
};