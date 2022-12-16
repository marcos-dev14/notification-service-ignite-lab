import { Notification } from '../entities/notification';

export abstract class NotificationsRepository {
  // Método para cria a notificação
  abstract create(notification: Notification): Promise<void>;
  // Método para buscar a notificação pelo ID
  abstract findById(notificationId: string): Promise<Notification | null>;
  // Método para atualizar quando a notificação foi alterado
  abstract save(notification: Notification): Promise<void>;
  // Método para buscar mais de uma informação por id recipiente
  abstract countManyByRecipientId(recipientId: string): Promise<number>;
  // Método para encontrar várias notificações por id do recipiente
  abstract findManyByRecipientId(recipientId: string): Promise<Notification[]>;
}
