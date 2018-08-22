/**
 * 
 */
/**
 * @author guilherme
 *	@date 06/06/2018
 */
package angularjs.repositories;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import angularjs.entities.Contato;


public interface ContatoRepository extends JpaRepository<Contato, Long>, CrudRepository<Contato, Long>{

	@Query(value = "SELECT c.contato_id, c.contato_data, c.contato_nome, c.contato_telefone, c.operadora_id,  c.deleted, c.updated, o.operadora_nome, o.operadora_codigo, o.operadora_categoria, o.operadora_preco\n" + 
			"  FROM Contato c\n" + 
			"INNER JOIN Operadora o ON o.operadora_id = c.operadora_id", nativeQuery = true)
    
	List<Contato> find();
	

}