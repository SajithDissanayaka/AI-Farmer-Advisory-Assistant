
import { Component, signal } from '@angular/core';

export interface ChatMessage {
  id: number;
  role: 'user' | 'assistant';
  text: string;
  time: string;
}

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [],
  templateUrl: './chat.html',
  styleUrl: './chat.css'
})
export class Chat {

  // Application state
  messages = signal<ChatMessage[]>([
    {
      id: 1,
      role: 'assistant',
      text: 'ආයුබෝවන්! 🌱 ඔබේ වගාව ගැන ප්‍රශ්නයක් අහන්න.',
      time: this.getTime()
    }
  ]);

  userInput = signal<string>('');
  isLoading = signal<boolean>(false);

  private nextId = 2;

  // Get current time
  getTime(): string {
    return new Date().toLocaleTimeString('si-LK', {
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  // Add a new chat message
  addMessage(
    role: 'user' | 'assistant',
    text: string
  ): void {

    const newMessage: ChatMessage = {
      id: this.nextId++,
      role: role,
      text: text,
      time: this.getTime()
    };

    this.messages.update(current => [
      ...current,
      newMessage
    ]);
  }

  // Send user message
  sendMessage(): void {

    const question = this.userInput().trim();

    // Input validation
    if (!question || this.isLoading()) {
      return;
    }

    // Display user's message
    this.addMessage('user', question);

    // Clear input
    this.userInput.set('');

    // Show loading state
    this.isLoading.set(true);

    // Temporary demo response
    const reply =
      'ඔබේ ප්‍රශ්නය ලැබුණා. 🌱 ' +
      'දැනට මෙය demo chatbot එකක්. ' +
      'ඉදිරියේදී DOA දත්ත භාවිතයෙන් ' +
      'කෘෂිකාර්මික උපදෙස් ලබාදෙන්නම්.';

    this.addMessage('assistant', reply);

    this.isLoading.set(false);
  }

  // Clear conversation
  clearChat(): void {
    this.messages.set([]);
    this.userInput.set('');
  }
}
