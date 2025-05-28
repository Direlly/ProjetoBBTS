package com.example.config;

import com.example.chat.handler.ChatWebSocketHandler;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;
import org.springframework.lang.NonNull;
// Configuração do WebSocket para o chat
// Permite que o frontend Angular se conecte ao backend Spring Boot via WebSocket
@Configuration
@EnableWebSocket
public class WebSocketConfig implements WebSocketConfigurer {
   // Configuração do WebSocket para o chat
    private final ChatWebSocketHandler chatWebSocketHandler;
    
    public WebSocketConfig(ChatWebSocketHandler chatWebSocketHandler) {
        this.chatWebSocketHandler = chatWebSocketHandler;
    }
   
    @Override
    public void registerWebSocketHandlers(@NonNull WebSocketHandlerRegistry registry) {
        registry.addHandler(this.chatWebSocketHandler, "/chat")
                .setAllowedOrigins("http://localhost:4200/login"); // Conexão do WebSocket com o frontend Angular
    }
}