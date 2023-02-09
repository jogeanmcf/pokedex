import { Spinner } from 'react-bootstrap';
import { FaXbox, FaSpinner, FaCheck} from 'react-icons/fa'
 
interface PostFeedbackProps {
  isSuccess: boolean,
  isError: boolean
}

const iconProp = {
  color: 'red',
  size:  24
}

export function PostFeedback({isSuccess,isError}: PostFeedbackProps){

  if(isError){
    return(
      <div  className='d-flex flex-column justify-content-center align-items-center mt-5' style={{height: 100}}>
        <FaXbox {...iconProp}/>
        <h6 className='text-danger'>Ocorreu um erro, tente novamente</h6>
      </div>
    );
  }
  
  if(isSuccess){
    return(
      <div  className='d-flex flex-column justify-content-center align-items-center mt-5' style={{height: 100}}>
        <FaCheck {...iconProp} color='green'/>
        <h5 className='text-success'>Time criado com sucesso</h5>
      </div>
    );
  }
  return(
    <div></div>
  );
}