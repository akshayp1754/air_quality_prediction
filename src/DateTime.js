const getCurrentEpoch = ()=>{
    const date = new Date();
    return Math.floor(date/1000)
}

const getFormatedDate = (date) => {
    const day = date.getDate()
    const year = date.getFullYear()
    const month = date.toLocaleString('default',{month:'short'})
    return `${day} ${month} ${year}`
}

const getFormattedDateFromEpochInSecond = (epochInSecond)=>{
   const date = new Date(epochInSecond*1000)
   return getFormatedDate(date)
}

const getFormattedDateFromEpochInMillisecond = (epochInMillisecond) => {
    const date = new Date(epochInMillisecond)
    return getFormatedDate(date)
} 

export default {getCurrentEpoch,getFormattedDateFromEpochInSecond,getFormattedDateFromEpochInMillisecond}