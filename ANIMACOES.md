# 🎬 Guia de Animações para Imagens - Site Sara Ramos

## ✨ Animações Implementadas

Seu site agora possui **5 tipos de animações em loop** para imagens:

### 1. **Float (Flutuação)** 🎈
- **Efeito:** A imagem flutua suavemente para cima e para baixo
- **Duração:** 4 segundos
- **Classe:** `.img-float`

### 2. **Pulse (Pulso)** 💓
- **Efeito:** A imagem aumenta e diminui suavemente
- **Duração:** 3 segundos
- **Classe:** `.img-pulse`

### 3. **Swing (Balanço)** 🌿
- **Efeito:** A imagem balança sutilmente de um lado para outro
- **Duração:** 6 segundos
- **Classe:** `.img-swing`

### 4. **Glow (Brilho)** ✨
- **Efeito:** A sombra da imagem brilha em azul suavemente
- **Duração:** 2 segundos
- **Classe:** `.img-glow`

### 5. **Breathe (Respiração)** 🫁
- **Efeito:** A imagem "respira" com zoom muito suave
- **Duração:** 5 segundos
- **Classe:** `.img-breathe`

## 🎯 Como Usar

### **Método 1: Aplicar Classes no HTML**
```html
<!-- Animação de flutuação -->
<img src="imagem.jpg" alt="Descrição" class="img-float">

<!-- Animação de pulso -->
<img src="imagem.jpg" alt="Descrição" class="img-pulse">

<!-- Animação de balanço -->
<img src="imagem.jpg" alt="Descrição" class="img-swing">

<!-- Animação de brilho -->
<img src="imagem.jpg" alt="Descrição" class="img-glow">

<!-- Animação de respiração -->
<img src="imagem.jpg" alt="Descrição" class="img-breathe">
```

### **Método 2: Já Aplicadas Automaticamente**
As imagens da página inicial já possuem animações:
- **Imagem das crianças (atividade):** Float
- **Imagem dos livros (jogos):** Pulse  
- **Imagem da educação (vídeos):** Breathe

## 🎛️ Personalização Avançada

### **Alterar Velocidade da Animação:**
```css
.minha-imagem {
    animation: float 2s ease-in-out infinite; /* Mais rápido */
    /* ou */
    animation: float 8s ease-in-out infinite; /* Mais lento */
}
```

### **Adicionar Delay (Atraso):**
```css
.minha-imagem {
    animation: pulse 3s ease-in-out infinite;
    animation-delay: 1s; /* Inicia após 1 segundo */
}
```

### **Combinar Animações:**
```css
.minha-imagem {
    animation: 
        float 4s ease-in-out infinite,
        glow 2s ease-in-out infinite;
}
```

## 🚀 Recursos Especiais

### **1. Pausa no Hover**
- Todas as animações pausam quando você passa o mouse sobre a imagem
- Melhora a experiência do usuário ao interagir

### **2. Acessibilidade**
- Pessoas que preferem movimento reduzido não verão as animações
- Respeita as configurações de acessibilidade do navegador

### **3. Performance Otimizada**
- Animações usam `transform` para melhor performance
- Não causam reflow/repaint desnecessário

## 📱 Compatibilidade

### **Navegadores Suportados:**
- ✅ Chrome (todas as versões modernas)
- ✅ Firefox (todas as versões modernas)  
- ✅ Safari (todas as versões modernas)
- ✅ Edge (todas as versões modernas)

### **Dispositivos:**
- ✅ Desktop
- ✅ Tablet
- ✅ Mobile (otimizado para touch)

## 🎨 Exemplos de Uso por Seção

### **Página Inicial:**
```html
<img src="criancasatividade.png" class="img-float criancas">
<img src="criancasbrincando.png" class="img-pulse livros">  
<img src="criancaslendo.png" class="img-breathe educacao">
```

### **Desenhos para Colorir:**
```html
<img src="desenho1.jpg" class="img-swing">
<img src="desenho2.jpg" class="img-glow">
```

### **Jogos Educativos:**
```html
<img src="jogo1.png" class="img-pulse">
<img src="jogo2.png" class="img-float">
```

## ⚡ Dicas de Performance

1. **Use com moderação:** Não anime todas as imagens da página
2. **Escolha animações adequadas:** Float e breathe são mais sutis
3. **Teste em dispositivos móveis:** Algumas animações podem consumir mais bateria

## 🔧 Troubleshooting

### **Animação não aparece:**
1. Verifique se a classe está corretamente aplicada no HTML
2. Confirme se não há conflitos de CSS
3. Teste se `animation-play-state: paused` não está sendo aplicado

### **Animação muito rápida/lenta:**
1. Ajuste o tempo na propriedade `animation`
2. Use valores entre 2s (rápido) e 8s (lento)

### **Performance lenta:**
1. Reduza o número de imagens animadas simultaneamente
2. Use animações mais leves como `breathe` em vez de `swing`