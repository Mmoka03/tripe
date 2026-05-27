package ga.tripe.tripe;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.jdbc.autoconfigure.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class})
public class TripeApplication {

    public static void main(String[] args) {
        SpringApplication.run(TripeApplication.class, args);
    }

}
