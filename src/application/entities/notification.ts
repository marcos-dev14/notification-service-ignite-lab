// Criando a nossa entidade de Notificações com Getters e Setters

import { randomUUID } from 'node:crypto';
import { Replace } from 'src/helpers/Replace';
import { Content } from './content';

export interface NotificationProps {
  recipientId: string;
  content: Content;
  category: string;
  readAt?: Date | null;
  canceledAt?: Date | null;
  createdAt: Date;
}

export class Notification {
  private _id: string;
  private props: NotificationProps;

  constructor(
    props: Replace<NotificationProps, { createdAt?: Date }>,
    id?: string,
  ) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  // Retornar o formato
  public get id() {
    return this._id;
  }

  // Informar o formato
  public set recipientId(recipientId: string) {
    this.props.recipientId = recipientId;
  }

  // Retornar o formato
  public get recipientId(): string {
    return this.props.recipientId;
  }
  // Informar o formato
  // Retornar o formato
  public set content(content: Content) {
    this.props.content = content;
  }

  // Retornar o formato
  public get content(): Content {
    return this.props.content;
  }

  // Informar o formato
  public set category(category: string) {
    this.props.category = category;
  }
  // Retornar o formato
  public get category(): string {
    return this.props.category;
  }

  // Informar o formato
  public read() {
    this.props.readAt = new Date();
  }

  public unread() {
    this.props.readAt = null;
  }

  // Retornar o formato
  public get readAt(): Date | null | undefined {
    return this.props.readAt;
  }

  public cancel() {
    this.props.canceledAt = new Date();
  }

  // Retornar o formato
  public get canceledAt(): Date | null | undefined {
    return this.props.canceledAt;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }
}
