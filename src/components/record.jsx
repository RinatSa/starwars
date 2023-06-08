/* eslint react/prop-types: 0*/
function Record({label, info, field}) {
    return (
        <p>{label} : {info[field]}</p>
    );
}

export default Record;