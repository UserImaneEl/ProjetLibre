package com.ProjetLabo.ContactLabo_Service.Clients;

import com.ProjetLabo.ContactLabo_Service.models.Laboratoire;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name="LABO-SERVICE")
public interface LaboRestClient {
    @GetMapping("api/labos/{id}")
    Laboratoire findLaboratoireById(@PathVariable("id") Long id);
}
