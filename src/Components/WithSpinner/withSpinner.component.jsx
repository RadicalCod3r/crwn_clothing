import { SpinnerOverlay, SpinnerContainer } from './withSpinner.styles';

const WithSpinner = WrappedComponent => {
    const Spinner = ({ isLoading, ...otherProps }) => {
        return isLoading ? (
            <SpinnerOverlay>
                <SpinnerContainer/>
            </SpinnerOverlay>
        ) : (
            <WrappedComponent {...otherProps}/>
        )
    }
    return Spinner;
}

export default WithSpinner;