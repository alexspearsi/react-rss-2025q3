import { useState } from 'react';
import UserProfile from '../../components/UserProfile/UserProfile';
import ActionButtons from '../../components/ActionButtons';

function MainPage() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isUserExist, setIsUserExist] = useState<boolean>(false);

  return <main>{isUserExist ? <UserProfile /> : <ActionButtons />}</main>;
}

export default MainPage;
