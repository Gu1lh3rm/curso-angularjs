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

import angularjs.entities.Operadora;
import angularjs.repositories.OperadoraRepository;

	@RestController
	@RequestMapping("/api")
	@CrossOrigin(origins="*", allowedHeaders="*")
	public class OperadoraController {
		@Autowired
		private OperadoraRepository operadoraRepository;

		@GetMapping("/operadoras")
		public List<Operadora> getOperadora() {
			return operadoraRepository.findAll();
		}

		@GetMapping("/operadora/{operadora_id}")
		public Optional<Operadora> getOperadora(@PathVariable Long operadora_id) {
			return operadoraRepository.findById(operadora_id);
		}

		@DeleteMapping("/operadora/{operadora_id}")
		public boolean deleteOperadora(@PathVariable Operadora operadora_id) {
			operadoraRepository.delete(operadora_id);
			 return true;
		}

		@PutMapping("/operadora")
		public Operadora updateContato(@RequestBody Operadora operadora_id) {
			return operadoraRepository.save(operadora_id);
		}

		@PostMapping("/operadora")
		public Operadora createOperadora(@RequestBody Operadora operadora) {
			return operadoraRepository.save(operadora);
		}

	}