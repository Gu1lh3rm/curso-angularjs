package angularjs.controllers;

	import java.util.List;
	import java.util.Optional;

	import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.CrossOrigin;
	import org.springframework.web.bind.annotation.DeleteMapping;
	import org.springframework.web.bind.annotation.GetMapping;
	import org.springframework.web.bind.annotation.PathVariable;
	import org.springframework.web.bind.annotation.PostMapping;
	import org.springframework.web.bind.annotation.PutMapping;
	import org.springframework.web.bind.annotation.RequestBody;
	import org.springframework.web.bind.annotation.RequestMapping;
	import org.springframework.web.bind.annotation.RestController;

import angularjs.entities.Contato;
import angularjs.repositories.ContatoRepository;

	@RestController
	@RequestMapping("/api")
	@CrossOrigin(origins="*", allowedHeaders="*")
	public class ContatoController {
		@Autowired
		private ContatoRepository contatoRepository;

		
		@GetMapping("/contatos")		
		public List<Contato> getContatos() {	
			System.out.println(contatoRepository.find());
			return contatoRepository.find();
			
		}	
		
		
		@GetMapping("/contato/{contato_id}")
		public Optional<Contato> getContato(@PathVariable Long contato_id) {
			return contatoRepository.findById(contato_id);
		}

		@DeleteMapping("/contato/{contato_id}")
		public boolean deleteContato(@PathVariable Contato contato_id) {
			contatoRepository.delete(contato_id);
			 return true;
		}

		@PutMapping("/contato")
		public Contato updateContato(@RequestBody Contato contato_id) {
			return contatoRepository.save(contato_id);
		}

		@PostMapping("/contato")
		public Contato createContato(@RequestBody Contato contato) {
			return contatoRepository.save(contato);
		}

	}