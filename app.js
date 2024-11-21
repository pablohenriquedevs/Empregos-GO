// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAdiMss6SPqGq83R-kxrmJRtfOa5yoILWU",
    authDomain: "empregos-go-e42f3.firebaseapp.com",
    projectId: "empregos-go-e42f3",
    storageBucket: "empregos-go-e42f3.firebasestorage.app",
    messagingSenderId: "483456268214",
    appId: "1:483456268214:web:4d58a1877c2733e1d7f317"
  };
  
  // Inicializa o Firebase
  const app = firebase.initializeApp(firebaseConfig);
  
  // Obter instância de autenticação
  const auth = firebase.auth();
  
  // Função para login com o Google
  function loginWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    
    auth.signInWithPopup(provider)
      .then((result) => {
        // Usuário autenticado com sucesso
        const user = result.user;
        console.log('Usuário autenticado:', user.displayName);
        // Redirecionar para a página inicial ou exibir informações do usuário
        window.location.href = './home.html'; // Exemplo de redirecionamento
      })
      .catch((error) => {
        // Tratar erros
        console.error('Erro de autenticação:', error.message);
      });
  }
  