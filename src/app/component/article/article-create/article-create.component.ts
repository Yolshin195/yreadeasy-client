import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ArticleService } from 'src/app/service/article.service';

@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
  styleUrls: ['./article-create.component.sass']
})
export class ArticleCreateComponent {
  form: FormGroup = this.createForm();

  constructor(private fb: FormBuilder, private router: Router, private articleService: ArticleService, private _snackBar: MatSnackBar) { }

  public onSubmit(): void {
    if (!this.form.valid) {
      console.log("Форма валидная")
      return;
    }

    this.articleService.save(this.form.value).subscribe(response => {
      this.router.navigate(['/article']);
      this.openSnackBar("Article successfully created!", "Close");
    })
  }

  private openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 4000, // Длительность уведомления в миллисекундах
    });
  }

  private createForm(): FormGroup {
    return this.fb.group({
      title: ['', Validators.required],
      source_link: ['', Validators.required],
      original_content: ['', Validators.required],
    })
  }

}
