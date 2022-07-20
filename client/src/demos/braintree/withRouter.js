import { useNavigate } from 'react-router-dom';

// A HOC a higher order component -> wrapping our component so we can pass it additonal props
export const withRouter = (Component) => {
  const Wrapper = (props) => {
    const navigate = useNavigate();
    const sayHello= () => {console.log('hello')}
    return (
      <Component
        navigate={navigate}
        sayHello={sayHello}
        {...props}
        />
    );
  };
  
  return Wrapper;
};

