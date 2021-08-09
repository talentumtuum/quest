import {NestFactory} from '@nestjs/core';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';
import {ApplicationModule} from './application-module';
import {MapErrorsInterceptor} from './common/interceptors';

const main = async () => {
	const app = await NestFactory.create(ApplicationModule);

	app.useGlobalInterceptors(new MapErrorsInterceptor());

	const config = new DocumentBuilder()
		.setTitle('1337 title')
		.setDescription('Waga Baga Boom!')
		.setVersion('1.0')
		.build();

	const document = SwaggerModule.createDocument(app, config);

	SwaggerModule.setup('api', app, document);

	await app.listen(process.env.APPLICATION_HTTP_PORT);
};

main();
