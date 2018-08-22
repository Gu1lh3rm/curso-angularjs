/**
 * 
 * @author guilherme
 *	@date 06/06/2018
 */

package angularjs.entities;


import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ForeignKey;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;


	@Entity
	@Table(name = "contato")
	public class Contato {
		@Id
	    @SequenceGenerator(name = "CONTATO_ID", sequenceName = "SEQUENCE_CONTATO", allocationSize = 1)
	    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "CONTATO_ID")
		
		private Long 	contato_id;
		private String 	contato_nome;
		private String	contato_telefone;
		
		@Column(updatable=false)
	    @CreationTimestamp
		private Date 	contato_data;
		
		@UpdateTimestamp
	    private Date updated;
		
		private Long 	operadora_id;			
		
		@Column(columnDefinition = "boolean default FALSE")
	    private boolean deleted;
		
		@ManyToOne
		@JoinColumn(name="operadora_id", insertable= false, updatable=false, foreignKey = @ForeignKey(name = "fkey_contato_operadora"))		
		public Operadora operadora;
		
		
		public Long getContato_id() {
			return contato_id;
		}
		public void setContato_id(Long contato_id) {
			this.contato_id = contato_id;
		}
		public String getContato_nome() {
			return contato_nome;
		}
		public void setContato_nome(String contato_nome) {
			this.contato_nome = contato_nome;
		}
		public String getContato_telefone() {
			return contato_telefone;
		}
		public void setContato_telefone(String contato_telefone) {
			this.contato_telefone = contato_telefone;
		}
		
		public Date getContato_data() {
			return contato_data;
		}
		public void setContato_data(Date contato_data) {
			this.contato_data = contato_data;
		}		
		
		public Long getOperadora_id() {
			return operadora_id;
		}
		public void setOperadora_id(Long operadora_id) {
			this.operadora_id = operadora_id;
		}
		
		public Date getUpdated() {
			return updated;
		}
		public void setUpdated(Date updated) {
			this.updated = updated;
		}
		public boolean isDeleted() {
			return deleted;
		}
		public void setDeleted(boolean deleted) {
			this.deleted = deleted;
		}
				
		public Contato(String contato_nome, String contato_telefone, Date contato_data, Date updated,
			Long operadora_id, boolean deleted, Operadora operadora) {
			this.contato_nome = contato_nome;
			this.contato_telefone = contato_telefone;
			this.contato_data = contato_data;
			this.updated = updated;
			this.operadora_id = operadora_id;
			this.deleted = deleted;
			this.operadora = operadora;
		}
		
		@Override
		public String toString() {
			return "Contato [contato_id=" + contato_id + ", contato_nome=" + contato_nome + ", contato_telefone="
					+ contato_telefone + ", contato_data=" + contato_data + ", updated=" + updated + ", operadora_id="
					+ operadora_id + ", deleted=" + deleted + ", operadora=" + operadora + "]";
		}
		
		public Contato() {
			
		}
		
		
		
		
	}