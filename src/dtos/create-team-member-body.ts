import { IsNotEmpty } from 'class-validator';

export class CreateTeamMemberBody {
  @IsNotEmpty({
    message: 'Você precisa informar o nome',
  })
  name: string;
  @IsNotEmpty({
    message: 'Você precisa informar a função.',
  })
  function: string;
}
