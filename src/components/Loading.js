import { ThreeDots } from "react-loader-spinner";

const Loading = () => {
    return (
        <ThreeDots
            height="80" 
            width="80" 
            radius="9"
            color="#FFFFFF"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true} 
       />
    )
};

export default Loading;