const CreateJoke = ({id,setup,punchline}) => {
    // const {id,setup,punchline}  = props?.data;
    return (
        <div>
            <h4>{id}</h4>
            <h2>{setup}</h2>
            <h4>{punchline}</h4>
        </div>
    )
}

export default CreateJoke;