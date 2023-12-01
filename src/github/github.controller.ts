import { Controller,Post, Body,Headers } from '@nestjs/common';
import { GithubService } from './github.service';
import { CreateGithubDto } from './dto/create-github.dto';
import { UpdateGithubDto } from './dto/update-github.dto';

@Controller('github')
export class GithubController {
  constructor(private readonly githubService: GithubService) {}
  
    @Post("/")
    webhookHandler(
      @Headers("x-github-event") githubEvent: any,
      @Body() body: any
    ){
      console.log({githubEvent});
      return { githubEvent };
    }
  }
  
