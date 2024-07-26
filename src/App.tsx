import { Container, Content } from "./App";
import { Chat } from "./components/Chat";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
function App() {
  return (
    <Container>
      <Header />
      <Content>
        <Chat />
      </Content>
      <Footer />
    </Container>
  );
}

export default App;
