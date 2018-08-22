package angularjs;

//import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;

//import angularjs.entities.Contato;
import angularjs.entities.Operadora;
import angularjs.repositories.OperadoraRepository;
//import angularjs.repositories.ContatoRepository;

@SpringBootApplication
@CrossOrigin
public class AngularjsApplication implements CommandLineRunner{
//	@Autowired
//	private ContatoRepository contatoRepository;
	
	@Autowired
	private OperadoraRepository operadoraRepository;
	
	public static void main(String[] args) {
		SpringApplication.run(AngularjsApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		//Date data = new Date();
		// TODO Auto-generated method stub
		
		operadoraRepository.save(new Operadora("Oi","14","Celular","2"));
		operadoraRepository.save(new Operadora("Vivo","15","Celular","1"));
		operadoraRepository.save(new Operadora("Tim","41","Celular","3"));
		
		//contatoRepository.save(new Contato("Bruno","9999-2222",data, 1L));
		//contatoRepository.save(new Contato("Bruno","9999-2222",data, 2L));
		//contatoRepository.save(new Contato("Bruno","9999-2222",data, 3L));
		
	}
}
