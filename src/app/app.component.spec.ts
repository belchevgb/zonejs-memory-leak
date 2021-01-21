import { ComponentFixture, fakeAsync, TestBed, tick } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";
import { AppModule } from "./app.module";

describe("first suite", () => {
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        AppModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
  });

  afterEach(() => {
    fixture.destroy();
    fixture = null;
  });

  it("test 1", fakeAsync(() => {
    fixture.detectChanges();
    tick();
  }));

  it("test 2", fakeAsync(() => {
    fixture.detectChanges();
    tick();
  }));
});

describe("second suite", () => {
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        AppModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
  });

  afterEach(() => {
    fixture.destroy();
    fixture = null;
  });

  it("test 1", fakeAsync(() => {
    fixture.detectChanges();
    tick();
  }));

  it("test 2", fakeAsync(() => {
    fixture.detectChanges();
    tick();
  }));
});
