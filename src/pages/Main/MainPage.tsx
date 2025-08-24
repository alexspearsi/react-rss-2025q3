import UserProfile from '../../components/UserProfile/UserProfile';
import ActionButtons from '../../components/ActionButtons';
import { useSelector } from 'react-redux';
import type { RootState } from '../../state/store';

function MainPage() {
  const userData = useSelector((state: RootState) => state.userForm.formData);

  return <main>{userData ? <UserProfile /> : <ActionButtons />}</main>;
}

export default MainPage;
