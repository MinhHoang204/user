import LoginPage from './pages/LoginPage'
import SettingsPage from './pages/SettingsPage'
import AdminPage from './pages/admin/AdminPage'
import UsersPage from './pages/user/UsersPage'
import RegisterPage from './pages/RegisterPage'
import UserForm from './components/UserForm'
import UserList from './components/UserList'

export default function App() {
  return (
    <div>App
      <AdminPage></AdminPage>
      <LoginPage></LoginPage>
      <RegisterPage></RegisterPage>
      <SettingsPage></SettingsPage>
      <UsersPage></UsersPage>
      <UserForm></UserForm>
      <UserList></UserList>
    </div>
  )
}
