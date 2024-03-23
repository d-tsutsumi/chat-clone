import { Messages } from '@/entities';
import { Success } from '@/utils/Result';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MessagesService {
  constructor(
    @InjectRepository(Messages)
    private readonly messageRepository: Repository<Messages>,
  ) {}

  async createMessage(roomId: string, userId: string, messageBody: string) {
    const message = this.messageRepository.create({
      room: { id: roomId },
      user: { id: userId },
      message: messageBody,
    });

    const newMessage = await this.messageRepository.save(message);

    return Success.create(newMessage);
  }
}
