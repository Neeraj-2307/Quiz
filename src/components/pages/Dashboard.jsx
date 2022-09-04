import { Box, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { QuizContext } from "../../Helpers/Contexts";
import { FaHome } from "react-icons/fa";
import Navbar from "../util/Navbar";
import Board from "../Board";
import Quiz from "../Quiz"; 

const Dashboard = () => {
  const { 
    isLoading,
    sfxMode,
    ButtonSound
  } = useContext(QuizContext);

  const play = () => {
    new Audio(ButtonSound).play()
  }

  const textStyle = {
    fontSize: '1.2rem'
  }

  return isLoading ? (<Box sx={{
    minH: '100vh',
    bgColor: 'blue.800',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDir: 'column'
  }}>
    <Box>
      <Text sx={textStyle}>Please wait...</Text>
    </Box>
    
    <Box sx={{
          mt: '20px'
        }}>
        <Link to='/home'>
          <Text onClick={() => {
            sfxMode && play();
          }} sx={{
            fontSize: '1.5rem'
          }}><FaHome /></Text>
      </Link>
    </Box>
  </Box>) : (
    <Box sx={{
      minH: '100vh',
      bgColor: 'blue.800',
      color: '#fff'
    }}>
      <Box sx={{
          maxW: '600px',
          m: '0 auto'
        }}>
          <Navbar />
          <Board />
          <Quiz />
      </Box>
    </Box>
  )
}

export default Dashboard