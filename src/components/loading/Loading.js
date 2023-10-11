import CircularProgress from '@mui/material/CircularProgress';
import "./Loading.css";

function Loading() {
    return (
        <div className='loading'>
            <p>Loading ...</p>
            <CircularProgress />
        </div>
    );
}

export default Loading;

