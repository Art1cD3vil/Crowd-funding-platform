// Modified App.jsx with dark theme implementation
import "./App.css";
// custom imports
import { Box, CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import CreateCampaignWrapper from "./pages/campaigns/CreateCampaignWrapper";
import FillCampaignDetails from "./pages/campaigns/FillCampaignDetails";
import ReviewCampaignDetails from "./pages/campaigns/ReviewCampaignDetails";
import HomePage from "./pages/HomePage";
import ActiveCampaigns from "./pages/campaigns/ActiveCampaigns";
import AuthProvider from "./contexts/AuthContext";
import Profile from "./pages/Profile";
import ViewCampaign from "./pages/campaigns/ViewCampaign";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthProtectedRoute from "./components/AuthProtectedRoute";
import ForgotPassword from "./pages/ForgotPassword";
// For wallet connection & usage..
import { UseWalletProvider } from "use-wallet";

// Create a dark theme
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#8a91ff',
    },
    secondary: {
      main: '#6e77d9',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
    text: {
      primary: '#e0e0e0',
      secondary: '#aaaaaa',
    },
    error: {
      main: '#f44336',
    },
    success: {
      main: '#4caf50',
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#1e1e1e',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#121212',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#1e1e1e',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5)',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <UseWalletProvider
        chainId={4}
        connectors={{
          walletconnect: {
            rpcUrl: 
              "https://goerli.infura.io/v3/eaf842956c36444c8aaf54163a47e0d2",
          },
        }}
      >
        <Router>
          <AuthProvider>
            <Routes>
              <Route index element={<HomePage />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route
                path="/profile"
                element={
                  <AuthProtectedRoute>
                    <Profile />
                  </AuthProtectedRoute>
                }
              />
              <Route
                path="/create-campaign"
                element={<FillCampaignDetails />}
              />
              <Route path="/active-campaigns" element={<ActiveCampaigns />} />
              <Route path="/campaign/*" element={<ViewCampaign />} />
            </Routes>
          </AuthProvider>
        </Router>
      </UseWalletProvider>
    </ThemeProvider>
  );
}

export default App;