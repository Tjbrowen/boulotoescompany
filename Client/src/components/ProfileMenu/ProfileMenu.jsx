import React from 'react'
import{ Avatar, MantineProvider, Menu} from "@mantine/core"
import '@mantine/core/styles.css';
import { useNavigate } from 'react-router-dom';

const ProfileMenu = ({user, logout}) => {
    const navigate = useNavigate()
  return (
<MantineProvider>
    <Menu >
    
    <Menu.Target>
            <Avatar src={user?.picture} alt='user image' radius={"xl"}/>
        </Menu.Target>
        <Menu.Dropdown>
        <Menu.Item onClick={()=> navigate("./quotes", {replace: true})}>
                Quotes
            </Menu.Item>

            <Menu.Item onClick={()=>{
                localStorage.clear();
                logout()
            }}>
                Logout
            </Menu.Item>
        </Menu.Dropdown>
    </Menu>
    </MantineProvider>
    
  )
}

export default ProfileMenu