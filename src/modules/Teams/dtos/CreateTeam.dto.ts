import { Expose } from 'class-transformer'
import { IsNotEmpty, IsString } from 'class-validator'

export class CreateTeamDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  name: string

  @IsNotEmpty()
  @IsString()
  @Expose()
  logo_url: string

  @IsNotEmpty()
  @IsString()
  @Expose()
  league: string

  @IsNotEmpty()
  @IsString()
  @Expose()
  sport: string
}
