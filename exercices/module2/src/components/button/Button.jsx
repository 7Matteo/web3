const Button = (props) => {

    const handleClick = (e) => props.changeCounter(parseInt(e.target.dataset.delta))

    return (
      <button onClick={handleClick} data-delta={props.delta}>
        {props.text}
      </button>
    )
}

export default Button