const StatisticsLine = (props) => {
    
    return(
        <div>
            <h3>{props.text} = {props.value}</h3>
        </div>
    )
    

}

const Statistics = (props) => {

    const average = () => {
        return (props.good-props.bad)/props.total
    }

    const isThereFeedback = () => {
        return !props.total == 0
        console.log(props.total);
    }
    if(!isThereFeedback()){
        return (
            <div>
                <h3>no feedback given</h3>
            </div>
        )

    }else{
        return (
            <div>
                <StatisticsLine text="good" value ={props.good} />
                <StatisticsLine text="neutral" value ={props.neutral} />
                <StatisticsLine text="bad" value ={props.bad} />
                <StatisticsLine text="average" value ={average()} />
            </div>
        )
    }

    
}

export default Statistics