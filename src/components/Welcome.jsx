import { useDispatch, useSelector } from 'react-redux';

function Welcome() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleClick = () => {
    dispatch({ type: 'USER_LOGOUT' });
  };

  return (
    <>
      <p>Welcome {user.displayName}</p>
      <button type="button" onClick={handleClick}>
        Log out
      </button>
    </>
  );
}

export default Welcome;
