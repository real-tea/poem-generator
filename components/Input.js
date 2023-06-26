const { TextInput } = require("react-native");


const className="border-2 border-gray-200 bg-white h-10 pl-2 rounded-lg mt-4";

function Input(props){
    return (
        <TextInput className={className} {...props}/>)
}