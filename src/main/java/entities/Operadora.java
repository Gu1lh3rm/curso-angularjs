/**
	 * 
	 */
	/**
	 * @author guilherme
	 *	@date 06/06/2018
	 */
	package angularjs.entities;



import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

	@Entity
	@Table(name = "operadora")
	public class Operadora {
		@Id
	    @SequenceGenerator(name = "OPERADORA_ID", sequenceName = "SEQUENCE_OPERADORA", allocationSize = 1)
	    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "OPERADORA_ID")
		private Long 	operadora_id;
		private String 	operadora_nome;
		private String 	operadora_codigo;
		private String	operadora_categoria;
		private String 	operadora_preco;
		
		@OneToMany(fetch=FetchType.LAZY, mappedBy = "operadora")		
		private List<Contato> contato;
		
		
		public Long getOperadora_id() {
			return operadora_id;
		}
		public void setOperadora_id(Long operadora_id) {
			this.operadora_id = operadora_id;
		}
		public String getOperadora_nome() {
			return operadora_nome;
		}
		public void setOperadora_nome(String operadora_nome) {
			this.operadora_nome = operadora_nome;
		}
		public String getOperadora_codigo() {
			return operadora_codigo;
		}
		public void setOperadora_codigo(String operadora_codigo) {
			this.operadora_codigo = operadora_codigo;
		}
		public String getOperadora_categoria() {
			return operadora_categoria;
		}
		public void setOperadora_categoria(String operadora_categoria) {
			this.operadora_categoria = operadora_categoria;
		}
		public String getOperadora_preco() {
			return operadora_preco;
		}
		public void setOperadora_preco(String operadora_preco) {
			this.operadora_preco = operadora_preco;
		}
		
		public Operadora(String operadora_nome, String operadora_codigo, String operadora_categoria,
				String operadora_preco) {
			//super();
			
			this.operadora_nome = operadora_nome;
			this.operadora_codigo = operadora_codigo;
			this.operadora_categoria = operadora_categoria;
			this.operadora_preco = operadora_preco;
		}
		
		@Override
		public String toString() {
			return "Operadora [operadora_id=" + operadora_id + ", operadora_nome=" + operadora_nome
					+ ", operadora_codigo=" + operadora_codigo + ", operadora_categoria=" + operadora_categoria
					+ ", operadora_preco=" + operadora_preco + "]";
		}
		public Operadora() {
			
			// TODO Auto-generated constructor stub
		}
		
		
		
		
		
	}