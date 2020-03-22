import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as sendgrid from '@sendgrid/mail';

@Injectable()
export class MailerService {
  constructor(private configService: ConfigService) {
    sendgrid.setApiKey(this.configService.get('SENDGRID_KEY'));
  }

  sendHospitalAssignConfirmation(token: string, to: string) {
    const SERVER_URL = this.configService.get('SERVER_URL');

    const message = {
      to,
      from: 'test@example.com',
      subject: 'Sending with SendGrid is Fun',
      text: 'and easy to do anywhere, even with Node.js',
      html: `<a href="${SERVER_URL}/hospitals/assignment/${token}">Click me to confirm</a>`,
    };

    sendgrid.send(message);
  }

  sendConfirmation(token: string, to: string, type: string) {
    const SERVER_URL = this.configService.get('SERVER_URL');


    const message = {
      to,
      from: 'test@example.com',
      subject: 'Sending with SendGrid is Fun',
      text: 'and easy to do anywhere, even with Node.js',
      html: `<a href="${SERVER_URL}/confirm/${type}/${token}">Click me to confirm</a>`,
    };

    sendgrid.send(message);
  }
}
